// SVG Icon library — all icons follow the same stroke-based style
// Usage: <Icons.Robot className="w-6 h-6" />

interface IconProps {
  className?: string;
  gradient?: boolean;
}

// Unique gradient IDs per component to avoid SVG collisions
let _gid = 0;
const gid = () => `icg_${++_gid}`;

const grad = (id: string, a: string, b: string) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor={a} />
      <stop offset="100%" stopColor={b} />
    </linearGradient>
  </defs>
);

export const Icons = {
  Robot: ({ className = "w-6 h-6" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#06b6d4", "#3b82f6")}
        <rect x="7" y="6" width="10" height="9" rx="2" stroke={`url(#${id})`} strokeWidth="1.5" fill="none"/>
        <line x1="12" y1="4" x2="12" y2="6" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="3.5" r="1" fill="#06b6d4"/>
        <circle cx="9.5" cy="9.5" r="1" fill={`url(#${id})`}/>
        <circle cx="14.5" cy="9.5" r="1" fill={`url(#${id})`}/>
        <path d="M9.5 12.5h5" stroke={`url(#${id})`} strokeWidth="1" strokeLinecap="round"/>
        <rect x="5" y="15" width="14" height="6" rx="2" stroke={`url(#${id})`} strokeWidth="1.5" fill="none"/>
        <circle cx="9" cy="18" r="1" fill="#06b6d4"/>
        <circle cx="12" cy="18" r="1" fill="#8b5cf6"/>
        <circle cx="15" cy="18" r="1" fill="#3b82f6"/>
        <path d="M5 17.5H3M21 17.5H19" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  },

  Cart: ({ className = "w-6 h-6" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#8b5cf6", "#ec4899")}
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="3" y1="6" x2="21" y2="6" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 10a4 4 0 01-8 0" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },

  Chat: ({ className = "w-6 h-6" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#10b981", "#06b6d4")}
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="10" x2="16" y2="10" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="14" x2="13" y2="14" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  },

  Flask: ({ className = "w-6 h-6" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#f97316", "#ef4444")}
        <path d="M9 3h6M10 3v7L6.5 17a2 2 0 001.8 2.9h7.4a2 2 0 001.8-2.9L14 10V3" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="6.5" y1="15" x2="17.5" y2="15" stroke={`url(#${id})`} strokeWidth="1" strokeLinecap="round"/>
      </svg>
    );
  },

  Code: ({ className = "w-6 h-6" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#3b82f6", "#8b5cf6")}
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },

  Gear: ({ className = "w-6 h-6" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#10b981", "#06b6d4")}
        <circle cx="12" cy="12" r="3" stroke={`url(#${id})`} strokeWidth="1.5"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke={`url(#${id})`} strokeWidth="1.5"/>
      </svg>
    );
  },

  GraduationCap: ({ className = "w-6 h-6" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#3b82f6", "#06b6d4")}
        <path d="M22 10l-10-5L2 10l10 5 10-5z" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12.5v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="22" y1="10" x2="22" y2="16" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  },

  BookOpen: ({ className = "w-6 h-6" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#f59e0b", "#f97316")}
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },

  Briefcase: ({ className = "w-6 h-6" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#10b981", "#3b82f6")}
        <rect x="2" y="7" width="20" height="14" rx="2" stroke={`url(#${id})`} strokeWidth="1.5"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="12" x2="12" y2="12" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round"/>
        <path d="M2 12h20" stroke={`url(#${id})`} strokeWidth="1" strokeLinecap="round"/>
      </svg>
    );
  },

  Rocket: ({ className = "w-6 h-6" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#3b82f6", "#8b5cf6")}
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },

  ExternalLink: ({ className = "w-5 h-5" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#3b82f6", "#8b5cf6")}
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="15 3 21 3 21 9" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="10" y1="14" x2="21" y2="3" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  },

  MapPin: ({ className = "w-4 h-4" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#ef4444", "#f97316")}
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" stroke={`url(#${id})`} strokeWidth="1.5"/>
        <circle cx="12" cy="10" r="3" stroke={`url(#${id})`} strokeWidth="1.5"/>
      </svg>
    );
  },

  Mail: ({ className = "w-4 h-4" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#3b82f6", "#8b5cf6")}
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={`url(#${id})`} strokeWidth="1.5"/>
        <polyline points="22,6 12,13 2,6" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  },

  Phone: ({ className = "w-4 h-4" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#10b981", "#06b6d4")}
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.86 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },

  Download: ({ className = "w-4 h-4" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#8b5cf6", "#3b82f6")}
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="7 10 12 15 17 10" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="15" x2="12" y2="3" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  },

  Star: ({ className = "w-4 h-4" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#f59e0b", "#f97316")}
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },

  Lock: ({ className = "w-5 h-5" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#6b7280", "#374151")}
        <rect x="3" y="11" width="18" height="11" rx="2" stroke={`url(#${id})`} strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0110 0v4" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  },

  Calendar: ({ className = "w-4 h-4" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#8b5cf6", "#06b6d4")}
        <rect x="3" y="4" width="18" height="18" rx="2" stroke={`url(#${id})`} strokeWidth="1.5"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="2" x2="8" y2="6" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="3" y1="10" x2="21" y2="10" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  },

  Zap: ({ className = "w-5 h-5" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#f59e0b", "#ef4444")}
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },

  Globe: ({ className = "w-5 h-5" }: IconProps) => {
    const id = gid();
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        {grad(id, "#06b6d4", "#3b82f6")}
        <circle cx="12" cy="12" r="10" stroke={`url(#${id})`} strokeWidth="1.5"/>
        <line x1="2" y1="12" x2="22" y2="12" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke={`url(#${id})`} strokeWidth="1.5"/>
      </svg>
    );
  },
};

export default Icons;
