#!/usr/bin/env bash
set -euo pipefail

mkdir -p \
  src/app/projects/'[slug]' \
  src/app/roadmaps \
  src/app/resources \
  src/components/3d \
  src/components/layout \
  src/components/ui \
  src/features/projects \
  src/features/roadmaps \
  src/features/resources \
  src/types \
  src/hooks \
  src/services \
  src/store \
  src/lib \
  src/utils \
  src/constants \
  src/assets/images \
  src/assets/icons \
  src/assets/3d \
  src/assets/animations

create_placeholder() {
  local file="$1"
  if [[ ! -e "$file" ]]; then
    printf '%s\n' '// Placeholder file' > "$file"
  fi
}

create_placeholder src/app/projects/'[slug]'/page.tsx
create_placeholder src/app/projects/page.tsx
create_placeholder src/app/roadmaps/page.tsx
create_placeholder src/app/resources/page.tsx
create_placeholder src/app/globals.css
create_placeholder src/app/layout.tsx
create_placeholder src/app/page.tsx
create_placeholder src/components/3d/HeroScene.tsx
create_placeholder src/components/layout/Navbar.tsx
create_placeholder src/components/layout/Footer.tsx
create_placeholder src/features/projects/ProjectCard.tsx
create_placeholder src/features/projects/data.ts
create_placeholder src/features/roadmaps/RoadmapCard.tsx
create_placeholder src/features/roadmaps/data.ts
create_placeholder src/features/resources/ResourceCard.tsx
create_placeholder src/features/resources/data.ts
create_placeholder src/types/project.ts
create_placeholder src/types/roadmap.ts
create_placeholder src/types/resource.ts
create_placeholder src/middleware.ts
create_placeholder .env.local
create_placeholder tailwind.config.ts
create_placeholder package.json
create_placeholder tsconfig.json
