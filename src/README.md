# Product Manager Portfolio

A modern, responsive portfolio website showcasing product management experience, projects, and skills.

## 📁 Project Structure

```
/
├── App.tsx                 # Main application component
├── data/
│   └── content.ts         # Centralized content data (UPDATE THIS FILE)
├── components/
│   ├── Navigation.tsx     # Sticky navigation bar
│   ├── Hero.tsx          # Landing section
│   ├── QuickStats.tsx    # Key metrics at a glance
│   ├── CoreCompetencies.tsx  # Core skills overview
│   ├── Projects.tsx      # Featured case studies
│   ├── Experience.tsx    # Work history timeline
│   ├── Skills.tsx        # Detailed skills breakdown
│   ├── Education.tsx     # Education & certifications
│   ├── Testimonials.tsx  # Colleague testimonials
│   ├── Contact.tsx       # Contact form & social links
│   ├── Footer.tsx        # Footer with links
│   └── ui/               # Reusable UI components (ShadCN)
└── styles/
    └── globals.css       # Global styles & typography
```

## 🎯 Quick Start: Updating Content

### To customize the portfolio with your information:

**Edit `/data/content.ts`** - This is the ONLY file you need to modify for content updates!

```typescript
// 1. Update personal information
export const personalInfo = {
  name: "Your Name",
  title: "Product Manager",
  email: "your.email@example.com",
  // ... update all fields
};

// 2. Update projects
export const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    // ... add your projects
  }
];

// 3. Update experience, skills, education, etc.
```

### Key Sections to Update:

1. **personalInfo** - Your name, title, bio, contact info, social links
2. **quickStats** - Your key metrics (years experience, products launched, etc.)
3. **coreCompetencies** - Your main skills
4. **skills** - Detailed breakdown by category
5. **projects** - Your case studies with metrics
6. **experience** - Work history with achievements
7. **education** - Degrees and schools
8. **certifications** - Certifications you've earned
9. **speaking** - Speaking engagements and content
10. **testimonials** - References from colleagues

## 🎨 Design Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Scrolling** - Navigate between sections seamlessly
- **Active Section Highlighting** - Navigation shows current section
- **Accessible** - Built with accessibility in mind (ARIA labels, keyboard navigation)
- **Fast Loading** - Optimized images and performance
- **Modern UI** - Clean, professional design with Tailwind CSS

## 🔧 Customization

### Changing Colors

Edit `/styles/globals.css` to change the color scheme:

```css
@theme {
  --color-primary: /* your color */;
  --color-secondary: /* your color */;
}
```

### Adding New Sections

1. Create a new component in `/components/YourSection.tsx`
2. Add your data to `/data/content.ts`
3. Import and add to `/App.tsx`
4. Add to navigation in `/components/Navigation.tsx`

### Resume/PDF

Update `resumeUrl` in `/data/content.ts` with your actual resume URL or file path.

## 📱 Sections Included

1. **Hero** - Introduction with CTA buttons
2. **Quick Stats** - Key metrics at a glance
3. **Core Competencies** - Highlight main skills
4. **Projects** - Detailed case studies with metrics
5. **Experience** - Work history timeline
6. **Skills** - Comprehensive skills breakdown
7. **Education** - Degrees, certifications, speaking
8. **Testimonials** - Social proof from colleagues
9. **Contact** - Form and social links
10. **Footer** - Additional links and info

## 🚀 For Recruiters

This portfolio is designed to showcase:
- **Impact**: Every project includes measurable results
- **Process**: Case studies show problem-solving approach
- **Technical Skills**: Clear breakdown of tools and methodologies
- **Leadership**: Experience managing cross-functional teams
- **Growth**: Career progression and continuous learning

## 📋 Maintenance Tips

### Version Control
- Use Git to track changes
- Commit after each content update
- Tag releases (e.g., v1.0, v1.1)

### Content Updates
- **Monthly**: Review and update metrics, add new projects
- **Quarterly**: Refresh testimonials, update skills
- **Annually**: Major design refresh if needed

### Backup Strategy
1. Keep `/data/content.ts` backed up separately
2. Export to JSON for easy recovery
3. Maintain a changelog of updates

## 🎓 Best Practices

1. **Keep it current** - Update within 1 week of new achievements
2. **Be specific** - Use numbers and metrics wherever possible
3. **Show impact** - Focus on results, not just responsibilities
4. **Tell stories** - Use case studies to showcase your process
5. **Make it scannable** - Use clear headings and bullet points
6. **Optimize for ATS** - Include relevant keywords naturally
7. **Test regularly** - Check on different devices and browsers

## 📞 Need Help?

The codebase is modular and well-commented. Each component is self-contained and easy to understand.

**Most common tasks:**
- Update content → Edit `/data/content.ts`
- Change colors → Edit `/styles/globals.css`
- Add section → Create component, update `App.tsx`
- Modify layout → Edit individual component files

---

Built with React, TypeScript, Tailwind CSS, and ShadCN UI components.
