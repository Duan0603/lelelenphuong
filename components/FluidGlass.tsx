import * as THREE from 'three';
import { useRef, useState, useEffect, memo, ReactNode } from 'react';
import { Canvas, createPortal, useFrame, useThree, ThreeElements } from '@react-three/fiber';
import {
  useFBO,
  useGLTF,
  Image,
  Preload,
  MeshTransmissionMaterial,
  Float
} from '@react-three/drei';
import { easing } from 'maath';

type Mode = 'lens' | 'bar' | 'cube';

type ModeProps = Record<string, unknown>;

interface FluidGlassProps {
  mode?: Mode;
  lensProps?: ModeProps;
}

export default function FluidGlass({ mode = 'lens', lensProps = {} }: FluidGlassProps) {
  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Bind to the root element so pointer events track globally
    setEventSource(document.getElementById('root'));
  }, []);

  return (
    <Canvas 
      camera={{ position: [0, 0, 20], fov: 15 }} 
      gl={{ alpha: true, antialias: false, powerPreference: "default" }}
      dpr={[1, 1.5]}
      eventSource={eventSource || undefined}
      eventPrefix="client"
      // Ensure canvas itself doesn't block any DOM interactions
      style={{ pointerEvents: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <Lens modeProps={lensProps}>
        {/* The elements rendered INSIDE the lens's internal scene */}
        <FloatingBackground />
      </Lens>
      <Preload />
    </Canvas>
  );
}

type MeshProps = ThreeElements['mesh'];

interface ModeWrapperProps extends MeshProps {
  children?: ReactNode;
  glb: string;
  geometryKey: string;
  followPointer?: boolean;
  modeProps?: ModeProps;
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  followPointer = true,
  modeProps = {},
  ...props
}: ModeWrapperProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const { nodes } = useGLTF(glb);
  const buffer = useFBO({ samples: 4 });
  const { viewport: vp } = useThree();
  const [scene] = useState<THREE.Scene>(() => new THREE.Scene());
  const geoWidthRef = useRef<number>(1);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const geo = (nodes[geometryKey] as THREE.Mesh)?.geometry;
    if (geo) {
      geo.computeBoundingBox();
      geoWidthRef.current = geo.boundingBox!.max.x - geo.boundingBox!.min.x || 1;
    }

    const onPointerMove = (e: MouseEvent) => {
      // Normalize to -1 to 1 based on viewport
      setCursor({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', onPointerMove);
    return () => window.removeEventListener('mousemove', onPointerMove);
  }, [nodes, geometryKey]);

  useFrame((state, delta) => {
    const { gl, viewport, camera } = state;
    
    // Convert normalized device coordinates (pointer) to world units based on camera
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (cursor.x * v.width) / 2 : 0;
    const destY = followPointer ? (cursor.y * v.height) / 2 : 0;
    
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    if ((modeProps as { scale?: number }).scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      // Slightly larger lens for global effect (0.25 vs 0.15)
      ref.current.scale.setScalar(Math.min(0.25, desired));
    }

    // Render the isolated scene into the FBO buffer
    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    
    // Completely transparent clear color so it only shows standard next.js backgrounds when unrefracted
    gl.setClearColor(0xfce4ec, 0);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps as {
    scale?: number;
    ior?: number;
    thickness?: number;
    anisotropy?: number;
    chromaticAberration?: number;
    [key: string]: unknown;
  };

  return (
    <>
      {createPortal(children, scene)}
      <mesh
        ref={ref}
        scale={scale ?? 0.25}
        rotation-x={Math.PI / 2}
        geometry={(nodes[geometryKey] as THREE.Mesh)?.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.2}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.05}
          chromaticAberration={chromaticAberration ?? 0.15}
          resolution={512}
          samples={4}
          clearcoat={1}
          clearcoatRoughness={0.1}
          roughness={0}
          transmission={1}
          {...(typeof extraMat === 'object' && extraMat !== null ? extraMat : {})}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return <ModeWrapper glb="/assets/3d/lens.glb" geometryKey="Cylinder" followPointer modeProps={modeProps} {...p} />;
}

// Internal floating content that the lens refracts
function FloatingBackground() {
  const { viewport } = useThree();
  
  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <Image position={[-viewport.width / 4, viewport.height / 4, 5]} scale={4} url="/lelelenphuong/IMG_5905.PNG" transparent opacity={0.6} />
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={3}>
        <Image position={[viewport.width / 3, -viewport.height / 4, 2]} scale={5} url="/lelelenphuong/IMG_6060.JPG" transparent opacity={0.6} />
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={2}>
        <Image position={[-viewport.width / 3, -viewport.height / 3, 8]} scale={3.5} url="/lelelenphuong/IMG_6746.JPG" transparent opacity={0.7} />
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={4}>
        <mesh position={[viewport.width / 4, viewport.height / 3, 0]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial color="#ff6b9d" transparent opacity={0.4} />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={1.5}>
        <mesh position={[-2, 0, -2]}>
          <torusGeometry args={[1.5, 0.4, 16, 100]} />
          <meshBasicMaterial color="#c084fc" transparent opacity={0.3} />
        </mesh>
      </Float>
    </group>
  );
}
