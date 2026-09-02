import { useEffect, useRef } from "react";
import * as THREE from "three";

const SpaceOrbit = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* =========================================================
       SCENE
    ========================================================= */

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    mount.appendChild(renderer.domElement);

    /* =========================================================
       LIGHTS
    ========================================================= */

    const ambientLight = new THREE.AmbientLight(0xffffff, 2.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.5);
    keyLight.position.set(3, 4, 6);
    scene.add(keyLight);

    const blueLight = new THREE.PointLight(0x38bdf8, 12, 15);
    blueLight.position.set(3, 1, 4);
    scene.add(blueLight);

    const orangeLight = new THREE.PointLight(0xfb923c, 10, 12);
    orangeLight.position.set(-3, -2, 4);
    scene.add(orangeLight);

    /* =========================================================
       MATERIALS
    ========================================================= */

    const whiteMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.28,
      metalness: 0.12,
    });

    const blueMaterial = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      roughness: 0.22,
      metalness: 0.18,
    });

    const darkBlueMaterial = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      roughness: 0.24,
      metalness: 0.18,
    });

    const orangeMaterial = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      emissive: 0xea580c,
      emissiveIntensity: 0.18,
      roughness: 0.25,
      metalness: 0.08,
    });

    const windowFrameMaterial = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      roughness: 0.2,
      metalness: 0.25,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x7dd3fc,
      emissive: 0x0891b2,
      emissiveIntensity: 0.45,
      roughness: 0.08,
      metalness: 0.05,
      transmission: 0.15,
      transparent: true,
      opacity: 0.95,
    });

    /* =========================================================
       ROCKET
    ========================================================= */

    const rocket = new THREE.Group();

    /* =========================================================
       BODY
    ========================================================= */

    const bodyGeometry = new THREE.SphereGeometry(0.48, 32, 32);

    const body = new THREE.Mesh(bodyGeometry, whiteMaterial);

    body.scale.set(0.78, 1.5, 0.78);
    body.position.y = 0.02;

    rocket.add(body);

    /* =========================================================
       NOSE
    ========================================================= */

    const noseGeometry = new THREE.ConeGeometry(0.37, 0.7, 32);

    const nose = new THREE.Mesh(noseGeometry, orangeMaterial);

    nose.position.y = 0.96;

    rocket.add(nose);

    const noseRingGeometry = new THREE.CylinderGeometry(0.38, 0.38, 0.07, 32);

    const noseRing = new THREE.Mesh(noseRingGeometry, orangeMaterial);

    noseRing.position.y = 0.62;

    rocket.add(noseRing);

    /* =========================================================
       WINDOW
    ========================================================= */

    const windowFrameGeometry = new THREE.TorusGeometry(0.2, 0.065, 16, 32);

    const windowFrame = new THREE.Mesh(
      windowFrameGeometry,
      windowFrameMaterial,
    );

    windowFrame.position.set(0, 0.32, 0.42);

    rocket.add(windowFrame);

    const windowGeometry = new THREE.SphereGeometry(0.16, 24, 24);

    const rocketWindow = new THREE.Mesh(windowGeometry, glassMaterial);

    rocketWindow.scale.z = 0.35;
    rocketWindow.position.set(0, 0.32, 0.43);

    rocket.add(rocketWindow);

    /* =========================================================
       WINDOW HIGHLIGHT
    ========================================================= */

    const highlightGeometry = new THREE.SphereGeometry(0.04, 16, 16);

    const highlightMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });

    const highlight = new THREE.Mesh(highlightGeometry, highlightMaterial);

    highlight.position.set(-0.055, 0.38, 0.575);

    rocket.add(highlight);

    /* =========================================================
       BOTTOM BAND
    ========================================================= */

    const bottomRingGeometry = new THREE.CylinderGeometry(0.38, 0.38, 0.16, 32);

    const bottomRing = new THREE.Mesh(bottomRingGeometry, orangeMaterial);

    bottomRing.position.y = -0.68;

    rocket.add(bottomRing);

    /* =========================================================
       LEFT FIN
    ========================================================= */

    const finShape = new THREE.Shape();

    finShape.moveTo(0, 0.45);

    finShape.bezierCurveTo(-0.32, 0.35, -0.58, 0.02, -0.52, -0.42);

    finShape.bezierCurveTo(-0.34, -0.35, -0.12, -0.18, 0, 0.02);

    finShape.lineTo(0, 0.45);

    const finGeometry = new THREE.ExtrudeGeometry(finShape, {
      depth: 0.1,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.025,
      bevelThickness: 0.025,
    });

    finGeometry.center();

    const leftFin = new THREE.Mesh(finGeometry, blueMaterial);

    leftFin.scale.set(1.15, 1.2, 1);
    leftFin.position.set(-0.42, -0.32, 0);
    leftFin.rotation.z = -0.1;

    rocket.add(leftFin);

    /* =========================================================
       RIGHT FIN
    ========================================================= */

    const rightFin = leftFin.clone();

    rightFin.scale.x = -1.15;
    rightFin.position.x = 0.42;
    rightFin.rotation.z = 0.1;

    rocket.add(rightFin);

    /* =========================================================
       FRONT FIN
    ========================================================= */

    const frontFinShape = new THREE.Shape();

    frontFinShape.moveTo(0, 0.35);

    frontFinShape.bezierCurveTo(-0.13, 0.05, -0.12, -0.45, 0, -0.62);

    frontFinShape.bezierCurveTo(0.12, -0.45, 0.13, 0.05, 0, 0.35);

    const frontFinGeometry = new THREE.ExtrudeGeometry(frontFinShape, {
      depth: 0.07,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    });

    frontFinGeometry.center();

    const frontFin = new THREE.Mesh(frontFinGeometry, darkBlueMaterial);

    frontFin.position.set(0, -0.38, 0.48);
    frontFin.scale.set(1.05, 1.05, 1);

    rocket.add(frontFin);

    /* =========================================================
       ENGINE
    ========================================================= */

    const engineGeometry = new THREE.CylinderGeometry(0.23, 0.29, 0.25, 24);

    const engine = new THREE.Mesh(engineGeometry, orangeMaterial);

    engine.position.y = -0.88;

    rocket.add(engine);

    /* =========================================================
       FIRE
    ========================================================= */

    const outerFireMaterial = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.95,
    });

    const outerFireGeometry = new THREE.ConeGeometry(0.22, 0.75, 24);

    const outerFire = new THREE.Mesh(outerFireGeometry, outerFireMaterial);

    outerFire.rotation.z = Math.PI;
    outerFire.position.y = -1.35;

    rocket.add(outerFire);

    const yellowFireMaterial = new THREE.MeshBasicMaterial({
      color: 0xfde047,
      transparent: true,
      opacity: 0.95,
    });

    const yellowFireGeometry = new THREE.ConeGeometry(0.13, 0.53, 24);

    const yellowFire = new THREE.Mesh(yellowFireGeometry, yellowFireMaterial);

    yellowFire.rotation.z = Math.PI;
    yellowFire.position.y = -1.25;
    yellowFire.position.z = 0.01;

    rocket.add(yellowFire);

    /* =========================================================
       ENGINE GLOW
    ========================================================= */

    const glowCanvas = document.createElement("canvas");

    glowCanvas.width = 128;
    glowCanvas.height = 128;

    const glowContext = glowCanvas.getContext("2d");

    if (glowContext) {
      const gradient = glowContext.createRadialGradient(64, 64, 0, 64, 64, 64);

      gradient.addColorStop(0, "rgba(251, 146, 60, 0.55)");

      gradient.addColorStop(0.35, "rgba(250, 204, 21, 0.25)");

      gradient.addColorStop(1, "rgba(249, 115, 22, 0)");

      glowContext.fillStyle = gradient;
      glowContext.fillRect(0, 0, 128, 128);
    }

    const glowTexture = new THREE.CanvasTexture(glowCanvas);

    const glowMaterial = new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
    });

    const engineGlow = new THREE.Sprite(glowMaterial);

    engineGlow.scale.set(1.2, 1.2, 1);
    engineGlow.position.y = -1.25;
    engineGlow.position.z = -0.1;

    rocket.add(engineGlow);

    scene.add(rocket);

    /* =========================================================
       ORBIT
    ========================================================= */

    const createEllipse = (radiusX, radiusY) => {
      const points = [];

      for (let i = 0; i <= 200; i += 1) {
        const angle = (i / 200) * Math.PI * 2;

        points.push(
          new THREE.Vector3(
            Math.cos(angle) * radiusX,
            Math.sin(angle) * radiusY,
            0,
          ),
        );
      }

      return points;
    };

    /*
     * Smaller orbit so everything stays
     * around the profile image.
     */

    const orbitRadiusX = 2.65;
    const orbitRadiusY = 1.7;

    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(
      createEllipse(orbitRadiusX, orbitRadiusY),
    );

    const orbitMaterial = new THREE.LineDashedMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.28,
      dashSize: 0.11,
      gapSize: 0.09,
    });

    const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);

    orbitLine.computeLineDistances();

    scene.add(orbitLine);

    /* =========================================================
       SECOND ORBIT
    ========================================================= */

    const secondOrbitGeometry = new THREE.BufferGeometry().setFromPoints(
      createEllipse(2.85, 1.85),
    );

    const secondOrbitMaterial = new THREE.LineBasicMaterial({
      color: 0x4ade80,
      transparent: true,
      opacity: 0.07,
    });

    const secondOrbit = new THREE.Line(
      secondOrbitGeometry,
      secondOrbitMaterial,
    );

    scene.add(secondOrbit);

    /* =========================================================
       PARTICLES
    ========================================================= */

    const particleCount = 45;

    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      const angle = Math.random() * Math.PI * 2;

      const randomRadiusX = orbitRadiusX + (Math.random() - 0.5) * 0.3;

      const randomRadiusY = orbitRadiusY + (Math.random() - 0.5) * 0.2;

      positions[i * 3] = Math.cos(angle) * randomRadiusX;

      positions[i * 3 + 1] = Math.sin(angle) * randomRadiusY;

      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
    }

    const particlesGeometry = new THREE.BufferGeometry();

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.03,
      transparent: true,
      opacity: 0.55,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);

    scene.add(particles);

    /* =========================================================
       RESIZE
    ========================================================= */

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      if (!width || !height) {
        return;
      }

      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);

    resizeObserver.observe(mount);

    /* =========================================================
       ANIMATION
    ========================================================= */

    const clock = new THREE.Clock();

    let animationFrame;

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      const speed = prefersReducedMotion ? 0 : 0.27;

      const angle = prefersReducedMotion ? -0.7 : time * speed;

      /* =======================================================
         ROCKET POSITION
      ======================================================= */

      const x = Math.cos(angle) * orbitRadiusX;

      const y = Math.sin(angle) * orbitRadiusY;

      rocket.position.set(x, y, Math.sin(angle) * 0.55);

      /* =======================================================
         ROCKET DIRECTION
      ======================================================= */

      const nextAngle = angle + 0.015;

      const nextX = Math.cos(nextAngle) * orbitRadiusX;

      const nextY = Math.sin(nextAngle) * orbitRadiusY;

      const directionX = nextX - x;
      const directionY = nextY - y;

      rocket.rotation.z = Math.atan2(directionY, directionX) - Math.PI / 2;

      /* =======================================================
         SMALL CARTOON WOBBLE
      ======================================================= */

      if (!prefersReducedMotion) {
        rocket.rotation.z += Math.sin(time * 3.5) * 0.025;

        rocket.rotation.x = Math.sin(time * 2.2) * 0.055;

        rocket.rotation.y = Math.sin(time * 1.8) * 0.055;
      }

      /* =======================================================
         SMALLER ROCKET SCALE
      ======================================================= */

      const depthScale = THREE.MathUtils.mapLinear(
        Math.sin(angle),
        -1,
        1,
        0.42,
        0.56,
      );

      const bounce = prefersReducedMotion ? 1 : 1 + Math.sin(time * 4) * 0.018;

      rocket.scale.setScalar(depthScale * bounce);

      /* =======================================================
         FIRE
      ======================================================= */

      if (!prefersReducedMotion) {
        const outerPulse = 1 + Math.sin(time * 14) * 0.12;

        outerFire.scale.set(1, outerPulse, 1);

        const innerPulse = 1 + Math.sin(time * 17) * 0.1;

        yellowFire.scale.set(1, innerPulse, 1);

        const glowPulse = 1 + Math.sin(time * 10) * 0.1;

        engineGlow.scale.set(1.2 * glowPulse, 1.2 * glowPulse, 1);

        particles.rotation.z = time * 0.01;

        orbitMaterial.opacity = 0.25 + Math.sin(time * 1.5) * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    /* =========================================================
       CLEANUP
    ========================================================= */

    return () => {
      window.cancelAnimationFrame(animationFrame);

      resizeObserver.disconnect();

      bodyGeometry.dispose();
      noseGeometry.dispose();
      noseRingGeometry.dispose();
      windowFrameGeometry.dispose();
      windowGeometry.dispose();
      highlightGeometry.dispose();
      bottomRingGeometry.dispose();
      finGeometry.dispose();
      frontFinGeometry.dispose();
      engineGeometry.dispose();
      outerFireGeometry.dispose();
      yellowFireGeometry.dispose();

      orbitGeometry.dispose();
      secondOrbitGeometry.dispose();
      particlesGeometry.dispose();

      whiteMaterial.dispose();
      blueMaterial.dispose();
      darkBlueMaterial.dispose();
      orangeMaterial.dispose();
      windowFrameMaterial.dispose();
      glassMaterial.dispose();
      highlightMaterial.dispose();
      outerFireMaterial.dispose();
      yellowFireMaterial.dispose();

      orbitMaterial.dispose();
      secondOrbitMaterial.dispose();
      particlesMaterial.dispose();

      glowTexture.dispose();
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
        absolute
        left-1/2
        top-1/2
        z-20
        h-[290px]
        w-[290px]
        -translate-x-1/2
        -translate-y-1/2
        min-[400px]:h-[330px]
        min-[400px]:w-[330px]
        sm:h-[410px]
        sm:w-[410px]
        md:h-[470px]
        md:w-[470px]
        lg:h-[500px]
        lg:w-[500px]
        xl:h-[540px]
        xl:w-[540px]
      "
    />
  );
};

export default SpaceOrbit;
