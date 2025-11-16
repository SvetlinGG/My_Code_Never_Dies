---
inclusion: always
---

# Haunted Portfolio - Spooky Development Guidelines

You are working on a **Haunted Cemetery Portfolio** - a dark, atmospheric, and spooky portfolio website. All development should maintain this eerie, gothic theme.

## Theme & Atmosphere

### Visual Style
- **Dark color palette**: Deep blacks (#0a0a1a), dark blues (#1a1a2e, #16213e)
- **Blood red accents**: #8b0000 for primary actions, #ff6600 for fire effects
- **Gothic typography**: Georgia serif font for that classic horror feel
- **Weathered textures**: Stone, cracks, moss, aged materials
- **Atmospheric effects**: Fog, smoke, floating particles, shadows

### Tone of Voice
- **Mysterious and dark**: Use spooky, cemetery-themed language
- **Playful horror**: Not too scary, but definitely eerie
- **Examples**:
  - "Welcome to the Haunted Cemetery"
  - "Where dead projects come to life..."
  - "Your message has been sent to the spirit realm!"
  - "Summon the Developer"
  - "Catacombs of Experience"
  - "Séance Room"

## Code Style Guidelines

### Component Naming
- Use descriptive, theme-appropriate names
- Examples: `tombstone`, `mausoleum`, `graveyard`, `seance-room`, `catacombs`

### Animation Principles
- **Subtle and atmospheric**: Animations should enhance the spooky mood
- **Performance-conscious**: Use CSS transforms and opacity for smooth 60fps
- **Examples**: flickering lights, floating fog, rising smoke, flame effects

### Responsive Design
- **Mobile-first approach** with breakpoints at 480px, 768px, 1024px
- **Disable heavy effects on mobile**: No smoke trails or fire sounds on small screens
- **Touch-friendly**: Larger tap targets, simplified interactions

### Accessibility
- Maintain readable contrast ratios despite dark theme
- Provide alternative text for decorative elements
- Ensure keyboard navigation works
- Don't rely solely on color for information

## Project Structure

### Frontend (Angular 18)
```
frontend/
├── src/
│   ├── app/
│   │   ├── home/              # Cemetery with tombstones
│   │   ├── about/             # Catacombs timeline
│   │   ├── contact/           # Séance room form
│   │   ├── project-detail/    # Mausoleum details
│   │   ├── navigation/        # Spooky nav bar
│   │   ├── shared/            # Reusable components
│   │   │   ├── spider-web/
│   │   │   ├── mouse-fog/
│   │   │   └── fire-sound/
│   │   └── services/          # API service
│   ├── environments/          # API endpoints
│   └── styles.css             # Global spooky styles
```

### Backend (Node.js + Express)
```
backend/
├── server.js                  # Main API file
├── .env                       # Environment variables
└── package.json
```

## Development Practices

### When Adding Features
1. **Maintain the theme**: Every new feature should fit the haunted aesthetic
2. **Test responsiveness**: Check mobile, tablet, and desktop
3. **Consider performance**: Heavy animations should be optional or optimized
4. **Browser compatibility**: Test SSR compatibility (no `window` or `document` in ngOnInit)

### When Fixing Bugs
1. **Check SSR compatibility**: Use `isPlatformBrowser` for browser-only code
2. **Verify API connection**: Ensure frontend and backend are communicating
3. **Test all breakpoints**: Mobile bugs are common with complex animations
4. **Console errors**: Keep the console clean in production

### Code Quality
- **TypeScript strict mode**: Use proper types, avoid `any`
- **RxJS best practices**: Unsubscribe from observables, use async pipe
- **CSS organization**: Keep styles scoped to components
- **Comments**: Explain complex animations or spooky effects

## Spooky Effect Guidelines

### Fire Effects
- Appear on tombstone hover
- Three flames with different flicker patterns
- Orange/red gradient with glow
- Fire sound plays (desktop only, 70% volume)

### Smoke Trail
- Follows mouse cursor (desktop only)
- Dark gray particles that rise and fade
- Max 15 particles for performance
- 2-second lifespan per particle

### Spider Webs
- Decorative element above titles
- Animated spider that moves subtly
- Semi-transparent for subtlety

### Tombstones
- Aged stone texture with weathering
- Moss at the bottom
- Pitting and imperfections
- Hover effects: fire, glow, shake

## API Integration

### Endpoints
- `GET /api/projects` - List all projects
- `GET /api/projects/:slug` - Project details
- `POST /api/contact` - Submit contact form

### Error Handling
- Show user-friendly error messages
- Fallback to static data if API fails
- Log errors to console for debugging

## Testing Checklist

Before considering a feature complete:
- [ ] Works on mobile (≤480px)
- [ ] Works on tablet (≤768px)
- [ ] Works on desktop (>1024px)
- [ ] No console errors
- [ ] SSR compatible (no browser API errors)
- [ ] Maintains spooky theme
- [ ] Smooth animations (60fps)
- [ ] API integration working
- [ ] Accessible (keyboard navigation, contrast)

## Common Pitfalls to Avoid

1. **Using browser APIs in SSR**: Always check `isPlatformBrowser` first
2. **Heavy animations on mobile**: Disable smoke, fire sounds on small screens
3. **Forgetting CORS**: Backend must allow frontend origin
4. **Hardcoded API URLs**: Use environment files
5. **Missing error handling**: Always handle API failures gracefully
6. **Breaking the theme**: Keep everything spooky and atmospheric!

## Inspiration & References

Think of:
- Gothic horror aesthetics
- Old cemetery atmospheres
- Haunted house vibes
- Classic horror films
- Dark fantasy games

But keep it **portfolio-appropriate** - spooky, not scary!

---

*"In the darkness of code, we find the light of creativity. May your commits be haunting and your bugs be vanquished!"* 👻
