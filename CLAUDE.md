# Development Instructions for Claude

## Styling Rules

### Always Use Tailwind CSS - No Hardcoded CSS
**CRITICAL**: Always use Tailwind CSS utility classes. Never hardcode CSS values in style attributes or custom CSS unless specifically requested.

**Example - WRONG:**
```jsx
<div style={{ padding: '1rem', fontSize: '18px' }}>Text</div>
```

**Example - CORRECT:**
```jsx
<div className="p-4 text-lg">Text</div>
```

---

*This document will be updated with additional project-specific instructions as needed.*
