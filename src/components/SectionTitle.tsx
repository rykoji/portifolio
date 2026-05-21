interface SectionTitleProps {
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionTitle({ title, description, center = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <div className={`inline-flex flex-col ${center ? 'items-center' : 'items-start'} mb-1`}>
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        <span className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
      </div>
      {description && (
        <p className={`text-slate-600 mt-4 max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
