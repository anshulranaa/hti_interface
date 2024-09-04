export const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);