export type Project = {
  slug: string;
  title: string;
  coverImage: string;
  videoEmbedUrl?: string;
  webAppUrl?: string;
  galleryImages: string[];
  info: string;
  infoHtml?: string;
  description: string;
};

const projectImageFiles = [
  "project (1).jpg",
  "project (2).jpg",
  "project (3).jpg",
  "project (4).jpg",
  "project (5).jpg",
  "project (6).jpg",
  "project (7).jpg",
  "project (8).png",
  "project (9).png",
  "project (10).png",
  "project (11).png",
  "project (12).png",
] as const;

const projectSortOrder: Record<string, number> = {
  swatch: 1,
  heineken: 2,
};

export const projects: Project[] = projectImageFiles
  .map((file, index) => {
    const number = String(index + 1).padStart(2, "0");
    const coverImage = `/media/project-images/${file}`;

    if (index === 0) {
      return {
        slug: "swatch",
        title: "Swatch",
        coverImage,
        videoEmbedUrl: "https://www.youtube.com/embed/liRVajRCVQ0?rel=0",
        galleryImages: [
          "/media/projects/swatch/swatch-1.png",
          "/media/projects/swatch/swatch-2.png",
        ],
        info:
          "Swatch: Skin Interactive Campaign is an interactive digital experience exploring the concept of time.",
        infoHtml: `
          <h1>Skin Campaign</h1>
          <h2>An interactive digital experience exploring the concept of time.</h2>
          <p>I was commissioned by Swatch to bring their creative vision to life for the global launch of the Swatch Skin watch line.</p>
          <h2>The Challenge</h2>
          <p>The project brief arrived as a static series of PDF images. The goal was to translate these flat concepts into a dynamic, flowing digital experience that would captivate users in retail environments.</p>
          <h2>The Solution</h2>
          <p>Using a blend of real-time animation, high-quality video, and 3D elements, I developed an interactive software experience that feels completely fluid and responsive. The final application was deployed on interactive touch screens installed in Swatch flagship stores across Europe.</p>
        `,
        description: "Swatch project preview",
      };
    }

    if (index === 1) {
      return {
        slug: "heineken",
        title: "Heineken",
        coverImage,
        videoEmbedUrl: "https://www.youtube.com/embed/iDPY4ZQyWDo?rel=0",
        galleryImages: [
          "/media/projects/heineken/heineken-1.png",
          "/media/projects/heineken/heineken-2.png",
        ],
        info:
          "Heineken: 140th Anniversary Interactive Bottle Wall is a massive interactive digital installation celebrating 140 years of Heineken.",
        infoHtml: `
          <h1>Heineken: 140th Anniversary Interactive Bottle Wall</h1>
          <h2>A massive, interactive digital installation celebrating 140 years of Heineken.</h2>
          <p>To mark their 140th anniversary, Heineken created a monumental LED wall layered behind hundreds of physical beer bottles, transforming the display into a giant, high-resolution "bottle screen."</p>
          <p>I was commissioned to develop the custom software powering the screen's content, alongside a public-facing web platform that brought the installation to life.</p>
          <h2>The Challenge</h2>
          <p>Heineken wanted to bridge the gap between their global audience and the physical installation in Amsterdam, allowing users to interact with the monumental screen in real time with zero friction.</p>
          <h2>The Solution</h2>
          <ul>
            <li><strong>Custom Display Software:</strong> Built the core application to manage and render dynamic, high-fidelity content seamlessly across the unique LED bottle-grid.</li>
            <li><strong>Interactive Web Platform:</strong> Developed a companion website allowing users worldwide to submit messages and photos directly to the wall.</li>
            <li><strong>Real-Time Integration:</strong> Designed an automated pipeline that instantly processed user submissions, seamlessly mapping their photos into an active, on-screen dance routine before displaying their personalized messages.</li>
          </ul>
          <p>The interactive installation ran live for a full month at the iconic Heineken Experience in Amsterdam, engaging thousands of visitors daily.</p>
        `,
        description: "Heineken project preview",
      };
    }

    if (index === 2) {
    return {
      slug: "hermes",
      title: "Hermes",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/CGTUjYUM1RU?rel=0",
      galleryImages: [
        "/media/projects/hermes/hermes-1.png",
        "/media/projects/hermes/hermes-2.png",
      ],
      info:
        "Hermes: Interactive Monolith is a bespoke interactive light sculpture created for an exclusive Hermès VIP event.",
      infoHtml: `
        <img class="project-info__brand-image" src="/media/projects/hermes/hermes-logo.png" alt="Hermès logo" loading="lazy" />
        <h2>Hermès: Interactive Monolith</h2>
        <p><strong>A bespoke interactive light sculpture for an exclusive Hermès VIP event.</strong></p>
        <p>For an exclusive customer event in Geneva, Switzerland, Hermès curated a collection of bespoke interactive artworks designed to blend luxury with cutting-edge digital art.</p>
        <p>I was commissioned to develop the custom software for the event's centerpiece: a giant, monolithic sculpture wrapped in a network of embedded LED strips.</p>
        <h3>The Challenge</h3>
        <p>The installation needed to feel intuitive and magical. The technology had to remain completely invisible, allowing the physical sculpture and the light itself to take center stage.</p>
        <h3>The Solution</h3>
        <ul>
          <li><strong>Tactile LED Control:</strong> Developed the real-time software that mapped and controlled the LED strips wrapping the monolith.</li>
          <li><strong>Touch-Reactive Design:</strong> Programmed a highly responsive system that turned the sculpture's surface into a tactile interface.</li>
          <li><strong>Dynamic Interaction:</strong> Enabled guests to interact directly with the monolith, using their touch to cast and shoot fluid beams of light pulsing along its surface.</li>
        </ul>
        <p>The resulting installation provided a highly engaging, tactile centerpiece that perfectly matched the elegant, premium aesthetic of the Hermès brand.</p>
      `,
      description: "Hermes project preview",
    };
  }

    if (index === 3) {
    return {
      slug: "intel",
      title: "Intel",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/RNhTFm8NeKU?rel=0",
      galleryImages: [
        "/media/projects/intel/intel-1.png",
        "/media/projects/intel/intel-2.png",
      ],
      info:
        "Intel: Smart Home Interactive Launch Experience is a large-format, hardware-integrated touch screen application showcasing the future of IoT.",
      infoHtml: `
        <h2>Intel: Smart Home Interactive Launch Experience</h2>
        <p><strong>A large-format, hardware-integrated touch screen application showcasing the future of IoT.</strong></p>
        <p>To celebrate the launch of Intel's new smart home hub—designed to centralize control of home sensors and gadgets—we were commissioned to build an immersive, large-format interactive showcase.</p>
        <h3>The Challenge</h3>
        <p>The application needed to bridge the gap between abstract smart technology and tangible user benefits, demonstrating how Intel's hub seamlessly orchestrates both digital data and physical hardware in real time.</p>
        <h3>The Solution</h3>
        <ul>
          <li><strong>Interactive 3D Visualization:</strong> Developed a rich 3D digital home interface that visually mapped out connected sensors and smart devices, making complex IoT ecosystems intuitive to explore.</li>
          <li><strong>Physical Hardware Integration:</strong> Programmed the software to communicate directly with real, physical smart sensors mounted alongside the screen.</li>
          <li><strong>Real-Time Tactile Feedback:</strong> Enabled guests to trigger physical responses directly from the touch screen, allowing them to instantly toggle real-world smart lights and interact with sensors in real time.</li>
        </ul>
        <p>The resulting installation provided a highly engaging, hands-on demonstration that perfectly captured the practical utility and innovative power of Intel's smart home ecosystem.</p>
      `,
      description: "Intel project preview",
    };
  }

    if (index === 4) {
    return {
      slug: "fiat",
      title: "Fiat",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/VKkr9eX58R4?rel=0",
      galleryImages: [
        "/media/projects/fiat/fiat-1.png",
        "/media/projects/fiat/fiat-2.png",
      ],
      info:
        "Fiat 500X: Dynamo Launch Illusion is cutting-edge performance software for a live, large-scale magical illusion in London.",
      infoHtml: `
        <h2>Fiat 500X: Dynamo Launch Illusion</h2>
        <p><strong>Cutting-edge performance software for a live, large-scale magical illusion in London.</strong></p>
        <p>For the highly anticipated launch of the Fiat 500X, Fiat hosted a spectacular live event in London featuring the world-renowned illusionist Dynamo. I was commissioned to develop the custom, real-time software that powered the climax of his performance.</p>
        <h3>The Challenge</h3>
        <p>The illusion required Dynamo to "draw" the outlines of the car live in mid-air, culminating in a real, physical Fiat 500X magically appearing on stage exactly where he had sketched it. Because this was a live, high-profile event, the software had to operate with absolute precision and zero latency, perfectly syncing digital projections with physical stage elements.</p>
        <h3>The Solution</h3>
        <ul>
          <li><strong>Custom Software Engineering:</strong> Built a bespoke graphics and tracking application entirely from the ground up to handle the unique demands of the live performance.</li>
          <li><strong>Pepper's Ghost Integration:</strong> Programmed the visual system to render seamlessly on a massive, specialized Pepper's Ghost holographic screen, creating the illusion of 3D light suspended in mid-air.</li>
          <li><strong>Film-Industry Collaboration:</strong> Worked closely with a premier cinematic special effects team to align the digital tracking, lighting, and physical mechanics of the car's sudden onstage appearance.</li>
        </ul>
        <p>The seamless fusion of custom software and physical illusion resulted in a breathtaking, viral launch moment that captured the imagination of both the live audience and the global press.</p>
      `,
      description: "Fiat project preview",
    };
  }

    if (index === 5) {
    return {
      slug: "panasonic",
      title: "Panasonic",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/LTlpigR52Cc?rel=0",
      galleryImages: [
        "/media/projects/panasonic/panasonic-1.png",
        "/media/projects/panasonic/panasonic-2.png",
      ],
      info:
        "Panasonic: IFA Immersive Underwater Sculpture is a synchronized 60-node computer cluster driving a massive, interactive 3D digital ecosystem.",
      infoHtml: `
        <h2>Panasonic: IFA Immersive Underwater Sculpture</h2>
        <p><strong>A synchronized 60-node computer cluster driving a massive, interactive 3D digital ecosystem.</strong></p>
        <p>To launch their latest line of television screens at IFA Berlin, Panasonic commissioned a monumental multimedia sculpture. Comprising a vast, complex array of physical displays, the installation acted as a single, unified window into a vibrant, real-time underwater world.</p>
        <h3>The Challenge</h3>
        <p>The installation required rendering a massive, high-fidelity 3D environment seamlessly across dozens of screens. To achieve a fluid, unified view without lag or visual tearing, the graphics, animations, and user interactions had to be perfectly synchronized across a massive network of hardware running simultaneously.</p>
        <h3>The Solution</h3>
        <ul>
          <li><strong>60-Node Network Architecture:</strong> Designed and developed the core software infrastructure that distributed, synchronized, and ran the real-time simulation across 60 networked computers.</li>
          <li><strong>High-Performance Graphics & VFX:</strong> Leveraged advanced real-time 3D animation, custom shaders, and dynamic visual effects (VFX) to bring the underwater ecosystem to life with stunning realism and fluid motion.</li>
          <li><strong>Multi-User iPad Interaction:</strong> Created an interactive pipeline allowing guests to use iPads to design and instantly release their own custom sea creatures directly into the massive, shared digital ocean.</li>
        </ul>
        <p>The resulting sculpture was a flagship attraction at IFA Berlin, seamlessly merging high-end software engineering, creative technology, and crowd interaction to showcase Panasonic's display technology at a grand scale.</p>
      `,
      description: "Panasonic project preview",
    };
  }

    if (index === 6) {
    return {
      slug: "bacardi",
      title: "Bacardi",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/2OGanXTe9KY?rel=0",
      galleryImages: [
        "/media/projects/bacardi/bacardi-1.png",
        "/media/projects/bacardi/bacardi-2.png",
      ],
      info:
        "Bacardi: Interactive Touring Bar is a touch-sensitive, object-reactive digital bar experience touring across Europe.",
      infoHtml: `
        <h2>Bacardi: Interactive Touring Bar</h2>
        <p><strong>A touch-sensitive, object-reactive digital bar experience touring across Europe.</strong></p>
        <p>As a key highlight of the traveling brand activation <em>The Bacardi Experience</em>, Bacardi commissioned a cutting-edge interactive bar designed to engage guests as they ordered and enjoyed their drinks.</p>
        <h3>The Challenge</h3>
        <p>I collaborated closely with a creative team to translate their static brand assets and visual designs into a highly responsive, real-time application. The system needed to reliably detect physical objects (like glasses and bottles) and user touch inputs on the bar surface, delivering seamless visual feedback in a fast-paced hospitality environment.</p>
        <h3>The Solution</h3>
        <ul>
          <li><strong>Object & Touch Detection:</strong> Developed the software layer responsible for sensing and tracking physical drinks and tactile touch points across the bar surface in real time.</li>
          <li><strong>Interactive Motion Graphics:</strong> Built a dynamic graphics engine that brought the brand’s assets to life, generating fluid, real-time visual effects that swirled, pulsed, and reacted directly to where guests placed their glasses.</li>
          <li><strong>Tour-Ready Reliability:</strong> Engineered the software to be robust, self-calibrating, and easy to deploy, ensuring it performed flawlessly at every stop of the multi-city European tour.</li>
        </ul>
        <p>The interactive bar successfully bridged the gap between physical mixology and digital play, creating a memorable, shareable centerpiece for Bacardi's European campaign.</p>
      `,
      description: "Bacardi project preview",
    };
  }

    if (index === 7) {
    return {
      slug: "androids-dream",
      title: "Androids Dream",
      coverImage,
      webAppUrl: "/unity-scene/index.html",
      galleryImages: [
        "/media/projects/androids-dream/androids-dream-1.png",
        "/media/projects/androids-dream/androids-dream-2.png",
      ],
      info:
        "Androids Dream is a high-performance, real-time 3D digital art piece built for the web.",
      infoHtml: `
        <h2>Androids Dream</h2>
        <p><strong>A high-performance, real-time 3D digital art piece built for the web.</strong></p>
        <p><em>Androids Dream</em> is an interactive digital artwork built in Unity and deployed as a WebGL application, designed to push the boundaries of real-time rendering directly within the browser.</p>
        <h3>The Challenge</h3>
        <p>Delivering high-fidelity 3D visuals, complex simulations, and cinematic visual effects on the web is notoriously difficult due to strict hardware limitations and browser constraints. The goal was to achieve a rich, atmospheric aesthetic without sacrificing frame rate or accessibility.</p>
        <h3>The Solution</h3>
        <ul>
          <li><strong>Optimized WebGL Architecture:</strong> Developed the art piece from the ground up in Unity, leveraging advanced WebGL optimization techniques to ensure rapid load times and smooth performance across a wide range of devices.</li>
          <li><strong>Custom Shaders & Visuals:</strong> Wrote bespoke shaders to handle unique surface reflections, lighting, and environmental effects, bypassing heavy generic rendering pipelines to keep the application lightweight.</li>
          <li><strong>Real-Time 3D & VFX:</strong> Integrated complex real-time 3D animations and dynamic particle systems (VFX) that react fluidly, creating an immersive, living atmosphere that runs seamlessly at 60 FPS in standard web browsers.</li>
        </ul>
        <p>The project successfully demonstrates that web-based art does not have to compromise on visual fidelity, merging creative coding with highly optimized technical execution.</p>
      `,
      description: "Androids Dream project preview",
    };
  }

    if (index === 8) {
    return {
      slug: "tt-motorcycle-school",
      title: "TT Motorcycle School",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/7vW8wr4tEkY?rel=0",
      galleryImages: [
        "/media/projects/tt-motorcycle-school/tt-motorycle-1.png",
        "/media/projects/tt-motorcycle-school/tt-motorycle-2.png",
      ],
      info:
        "TT Motorcycle School: AI-Accelerated Web Redesign is a high-performance, SEO-optimized web platform built using a human-led, agentic AI workflow.",
      infoHtml: `
        <h2>TT Motorcycle School: AI-Accelerated Web Redesign</h2>
        <p><strong>A high-performance, SEO-optimized web platform built using a human-led, agentic AI workflow.</strong></p>
        <p>TT Motorcycle School commissioned a complete digital overhaul to replace their legacy Squarespace site. Leveraging a cutting-edge development pipeline, I rebuilt their web presence from the ground up to improve search visibility, speed, and brand aesthetic in a fraction of traditional development time.</p>
        <h3>The Challenge</h3>
        <p>The school's existing Squarespace website lacked the performance, SEO flexibility, and bespoke branding needed to stand out in a competitive local market. The goal was to deliver a highly customized, fast, and modern web application rapidly, without compromising on design quality or user experience.</p>
        <h3>The Solution</h3>
        <ul>
          <li><strong>Human-Led, Agentic Development:</strong> Directed and orchestrated advanced agentic AI tools to handle rapid prototyping and code generation. By maintaining strict creative control over the architecture, user experience, and visual layout, I drastically accelerated the build time while keeping design standards high.</li>
          <li><strong>AI-Generated Brand Assets:</strong> Utilized state-of-the-art generative AI image tools to craft a cohesive, premium set of custom branding visual assets tailored specifically to the school’s identity.</li>
          <li><strong>Advanced SEO & Performance Upgrades:</strong> Migrated away from the rigid templates of Squarespace to a modern, lightweight web framework built with technical SEO, lightning-fast load speeds, and clean semantic structure at its core.</li>
        </ul>
        <p>This project serves as a case study for the future of web development: showing how human creativity, when augmented by agentic and generative AI, can produce a superior, high-performance product in record time.</p>
      `,
      description: "TT Motorcycle School project preview",
    };
  }

    if (index === 9) {
    return {
      slug: "sprinkles",
      title: "Sprinkles",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/1_ImOyM18AA?rel=0",
      galleryImages: [
        "/media/projects/sprinkles/sprinkles-1.png",
        "/media/projects/sprinkles/sprinkles-2.png",
      ],
      info:
        "Sprinkles is a playful, spatial-aware mixed-reality puzzle game built for the Meta Quest.",
      infoHtml: `
        <h2>Sprinkles</h2>
        <p><strong>A playful, spatial-aware mixed-reality puzzle game built for the Meta Quest.</strong></p>
        <p><em>Sprinkles</em> (subtitled <em>The Hors d'Oeuvre</em>) is an innovative mixed-reality (MR) puzzle game designed specifically for the Meta Quest ecosystem. As the sole creator behind the project, I served as the lead developer, game designer, 3D/2D asset producer, and audio/music composer, taking the game from initial concept to a playable public release.</p>
        <h3>The Challenge</h3>
        <p>Designing for mixed reality requires a deep understanding of spatial computing. The game needed to seamlessly blend digital physics-based puzzle mechanics with the player's actual, real-world physical environment—all while maintaining optimized performance on standalone VR hardware.</p>
        <h3>The Solution</h3>
        <ul>
          <li><strong>Full-Cycle Solo Development:</strong> Handled the entire production pipeline, including game loop programming, spatial mapping integration, UX design, and optimization for the Meta Quest platform.</li>
          <li><strong>Custom Asset & Audio Production:</strong> Created all visual 3D assets and 2D design elements from scratch, and composed a bespoke, whimsical soundtrack and spatial audio SFX designed to heighten player immersion.</li>
          <li><strong>Spatial Puzzle Mechanics:</strong> Designed unique, intuitive puzzle mechanics that utilize the Meta Quest’s passthrough and spatial-anchoring capabilities, allowing digital game elements to react dynamically to real-world walls, furniture, and surfaces.</li>
        </ul>
        <p>The proof of concept is currently live and available to play as a public demo on <a href="https://sidequestvr.com/app/54836/sprinkles-the-hors-doeuvre" target="_blank" rel="noopener noreferrer">SideQuest</a>.</p>
      `,
      description: "Sprinkles project preview",
    };
  }

    if (index === 10) {
    return {
      slug: "perfect-eye",
      title: "Perfect Eye",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/Rh_YoU-F4c0?rel=0",
      galleryImages: [
        "/media/projects/perfect-eye/perfect-eye (1).png",
        "/media/projects/perfect-eye/perfect-eye (2).png",
      ],
      info:
        "Perfect Eye is a professional-grade medical visualization and educational iOS application for iPhone and iPad.",
      infoHtml: `
        <h2>Perfect Eye</h2>
        <p><strong>A professional-grade medical visualization and educational iOS application for iPhone and iPad.</strong></p>
        <p>Used by doctors, ophthalmologists, and surgeons worldwide, <em>Perfect Eye</em> is a critical clinical tool designed for patient education and step-by-step surgical procedure walkthroughs. I was commissioned to completely upgrade and modernize the core Unity-based application.</p>
        <h3>The Challenge</h3>
        <p>Medical visualization software demands absolute anatomical accuracy, flawless performance on mobile devices, and an incredibly intuitive user interface. Operating on an existing codebase, the challenge was to refactor, optimize, and scale the application to meet modern iOS standards while ensuring the interactive 3D medical models remained highly detailed and responsive.</p>
        <h3>The Solution</h3>
        <ul>
          <li><strong>Unity iOS Optimization:</strong> Upgraded the legacy Unity codebase, optimizing memory management and rendering pipelines to ensure smooth, high-fidelity 3D performance on both iPads and iPhones.</li>
          <li><strong>High-Fidelity Medical Visualization:</strong> Refined and managed the rendering of complex anatomical structures of the eye, ensuring doctors could clearly and accurately illustrate intricate surgical procedures to their patients.</li>
          <li><strong>UI/UX & Deployment Modernization:</strong> Enhanced the application's interactive controls and navigation, streamlining the user experience so clinical professionals can seamlessly utilize the app during fast-paced consultations.</li>
        </ul>
        <p>The updated application successfully modernizes a vital interactive resource, empowering medical professionals around the globe to communicate complex diagnoses and surgeries with ease and precision.</p>
      `,
      description: "Perfect Eye project preview",
    };
  }

    if (index === 11) {
    return {
      slug: "foodtopia",
      title: "Foodtopia",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/GqGfsr4SM6g?rel=0",
      galleryImages: [
        "/media/projects/foodtopia/foodtopia-1.png",
        "/media/projects/foodtopia/foodtopia-2.png",
      ],
      info:
        "Foodtopia: Gamified Academic Research is an interactive web-based serious game developed for the University of Sussex.",
      infoHtml: `
        <h2>Foodtopia: Gamified Academic Research</h2>
        <p><strong>An interactive web-based serious game developed for the University of Sussex.</strong></p>
        <p>Commissioned by the University of Sussex, <em>Foodtopia</em> is an educational web game designed to translate complex academic research into an accessible, interactive format. The game serves as a digital companion to a research report focusing on food availability and systemic challenges faced by marginalized communities in the South of England.</p>
        <h3>The Challenge</h3>
        <p>Academic reports are often dense and challenging for the general public to fully digest. The goal was to take qualitative and quantitative research data and transform it into an engaging gameplay experience that builds empathy, explains systemic barriers, and retains the integrity of the university's research.</p>
        <h3>The Solution</h3>
        <ul>
          <li><strong>Godot Web Development:</strong> Developed the game using the Godot engine, optimizing the build for seamless, lightweight deployment on standard web browsers.</li>
          <li><strong>Hybrid Visual Direction:</strong> Crafted a unique, cohesive aesthetic by blending custom, hand-drawn digital art with curated generative AI imagery, establishing a fitting atmosphere for the game's narrative.</li>
          <li><strong>Empathy-Driven Game Design:</strong> Translated research data into interactive decision-making mechanics, allowing players to experience the real-world trade-offs, systemic hurdles, and logistical challenges highlighted in the academic study.</li>
        </ul>
        <p>By transforming vital social research into a playable digital experience, <em>Foodtopia</em> successfully bridges the gap between academic data and public awareness, making critical social issues interactive and easy to understand.</p>
      `,
      description: "Foodtopia project preview",
    };
  }

    return {
      slug: `project-${number}`,
      title: `Project ${number}`,
      coverImage,
      galleryImages: [coverImage],
      info: "Project information will be added here soon.",
      description: `Project ${number} preview`,
    };
  })
  .sort((left, right) => {
    const leftRank = projectSortOrder[left.slug] ?? 0;
    const rightRank = projectSortOrder[right.slug] ?? 0;

    if (leftRank === rightRank) {
      return 0;
    }

    if (leftRank === 0) {
      return -1;
    }

    if (rightRank === 0) {
      return 1;
    }

    return leftRank - rightRank;
  });

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}