# Green Heaven Service — Project Implementation Rules

## Specification priority
- PRD.md defines business requirements.
- Design.md defines visual design, typography, color, layout, animation, responsive behavior, and accessibility.
- Architecture.md defines application structure and routing.
- Rules.md defines coding and implementation constraints.
- Memory.md preserves established decisions and project context.
- Tasks.md tracks implementation progress.

If two documents conflict, identify the conflict and ask for clarification rather than silently choosing a different direction.

## Visual consistency
- Follow Design.md for every page, component, and responsive state.
- Use the specified dark cinematic visual direction, typography, color tokens, and carefully layered backgrounds.
- Separate background imagery, haze, top navigation darkening, and bottom contrast layers.
- Never rely on blur alone to make text readable.
- Use dark glass surfaces behind light text.
- Avoid excessive gradients, glowing effects, oversized cards, and unnecessary animation.
- Use consistent spacing, radii, borders, and interaction states.
- Do not introduce a new visual system without approval.

## Implementation
- Use the existing React, TypeScript, Tailwind CSS, and routing setup where present.
- Prefer reusable, accessible components over duplicated markup.
- Use typed component props and avoid unnecessary `any`.
- Preserve existing working features and project configuration.
- Do not add dependencies when existing tools can solve the problem.
- Do not replace unrelated code or reformat entire files unnecessarily.

## Accessibility and responsive behavior
- Support keyboard navigation and visible focus indicators.
- Use semantic HTML and accessible labels.
- Respect prefers-reduced-motion.
- Ensure the mobile navigation opens and closes correctly, including Escape-key handling.
- Check small mobile screens, tablets, desktop layouts, and short-height desktop viewports.
- Verify text contrast against the actual rendered background.

## Company information
- Use verified information from the project documentation.
- Never fabricate customer names, reviews, performance metrics, certifications, awards, or company history.
- Keep phone numbers, email, address, and company information consistent across the site.

## Quality control
- Run the available lint, type-check, build, and test commands after meaningful changes.
- Fix regressions introduced by the implementation.
- Update Tasks.md when work is completed.
- Report changed files, verification results, remaining issues, and any assumptions.