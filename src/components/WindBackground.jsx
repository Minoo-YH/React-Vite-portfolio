import { useEffect, useRef } from "react";
import * as THREE from "three";

const WindBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) return undefined;

    /* =========================================================
       SCENE
    ========================================================= */

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );

    camera.position.z = 5;

    /* =========================================================
       RENDERER
    ========================================================= */

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setClearColor(0x000000, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    renderer.setSize(window.innerWidth, window.innerHeight, false);

    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    mount.appendChild(renderer.domElement);

    /* =========================================================
       RESPONSIVE PARTICLE COUNT
    ========================================================= */

    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

    const particleCount = isMobile ? 350 : isTablet ? 550 : 850;

    /* =========================================================
       PARTICLE GEOMETRY
    ========================================================= */

    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(particleCount * 3);

    const basePositions = new Float32Array(particleCount * 3);

    const speeds = new Float32Array(particleCount);
    const offsets = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i += 1) {
      const index = i * 3;

      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 9;
      const z = (Math.random() - 0.5) * 8;

      positions[index] = x;
      positions[index + 1] = y;
      positions[index + 2] = z;

      basePositions[index] = x;
      basePositions[index + 1] = y;
      basePositions[index + 2] = z;

      speeds[i] = 0.15 + Math.random() * 0.25;
      offsets[i] = Math.random() * Math.PI * 2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    /* =========================================================
       PARTICLE MATERIAL
    ========================================================= */

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.025 : 0.03,
      color: 0x66ccff,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);

    scene.add(particles);

    /* =========================================================
       SECOND PARTICLE LAYER
    ========================================================= */

    const glowGeometry = new THREE.BufferGeometry();

    const glowCount = isMobile ? 60 : 120;

    const glowPositions = new Float32Array(glowCount * 3);

    for (let i = 0; i < glowCount; i += 1) {
      const index = i * 3;

      glowPositions[index] = (Math.random() - 0.5) * 14;

      glowPositions[index + 1] = (Math.random() - 0.5) * 9;

      glowPositions[index + 2] = (Math.random() - 0.5) * 7;
    }

    glowGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(glowPositions, 3),
    );

    const glowMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.045 : 0.055,
      color: 0x22c55e,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const glowParticles = new THREE.Points(glowGeometry, glowMaterial);

    scene.add(glowParticles);

    /* =========================================================
       MOUSE / POINTER
    ========================================================= */

    const pointer = {
      x: 0,
      y: 0,
    };

    const targetPointer = {
      x: 0,
      y: 0,
    };

    const handlePointerMove = (event) => {
      targetPointer.x = (event.clientX / window.innerWidth - 0.5) * 2;

      targetPointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    if (!isMobile) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
    }

    /* =========================================================
       REDUCED MOTION
    ========================================================= */

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let prefersReducedMotion = reducedMotionQuery.matches;

    const handleReducedMotion = (event) => {
      prefersReducedMotion = event.matches;
    };

    reducedMotionQuery.addEventListener?.("change", handleReducedMotion);

    /* =========================================================
       ANIMATION
    ========================================================= */

    const clock = new THREE.Clock();

    let animationFrameId = null;
    let isRunning = true;

    const animate = () => {
      if (!isRunning) return;

      animationFrameId = window.requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      /*
       * Smooth pointer interpolation
       */
      pointer.x += (targetPointer.x - pointer.x) * 0.025;

      pointer.y += (targetPointer.y - pointer.y) * 0.025;

      if (!prefersReducedMotion) {
        const positionAttribute = geometry.getAttribute("position");

        const positionArray = positionAttribute.array;

        /*
         * Subtle wind movement
         */
        for (let i = 0; i < particleCount; i += 1) {
          const index = i * 3;

          const baseX = basePositions[index];
          const baseY = basePositions[index + 1];
          const baseZ = basePositions[index + 2];

          const wave =
            Math.sin(elapsedTime * speeds[i] + offsets[i] + baseY * 0.45) *
            0.12;

          const verticalWave =
            Math.cos(elapsedTime * 0.2 + offsets[i] + baseX * 0.2) * 0.05;

          positionArray[index] = baseX + wave;

          positionArray[index + 1] = baseY + verticalWave;

          positionArray[index + 2] = baseZ;
        }

        positionAttribute.needsUpdate = true;

        /*
         * Slow global movement
         */
        particles.rotation.y = elapsedTime * 0.015 + pointer.x * 0.04;

        particles.rotation.x =
          Math.sin(elapsedTime * 0.15) * 0.04 - pointer.y * 0.025;

        glowParticles.rotation.y = -elapsedTime * 0.01;

        glowParticles.rotation.z = Math.sin(elapsedTime * 0.08) * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    /* =========================================================
       RESIZE
    ========================================================= */

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      renderer.setSize(width, height, false);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    /* =========================================================
       VISIBILITY / PERFORMANCE
    ========================================================= */

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;

        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }

        return;
      }

      if (!isRunning) {
        isRunning = true;
        clock.getDelta();
        animate();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    /* =========================================================
       CLEANUP
    ========================================================= */

    return () => {
      isRunning = false;

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener("resize", handleResize);

      window.removeEventListener("pointermove", handlePointerMove);

      document.removeEventListener("visibilitychange", handleVisibilityChange);

      reducedMotionQuery.removeEventListener?.("change", handleReducedMotion);

      scene.remove(particles);
      scene.remove(glowParticles);

      geometry.dispose();
      material.dispose();

      glowGeometry.dispose();
      glowMaterial.dispose();

      renderer.dispose();

      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        h-screen
        w-screen
        overflow-hidden
      "
    />
  );
};

export default WindBackground;
