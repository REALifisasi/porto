type Props = {
  kicker?: string
  title: string
  dark?: boolean
  align?: 'left' | 'center'
}

export default function SectionHeading({ kicker, title, dark = false, align = 'left' }: Props) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-2 ${alignCls}`}>
      {kicker ? (
        <span
          className={`font-pixel text-sm font-semibold uppercase tracking-wider ${
            dark ? 'text-amber-300' : 'text-foreground/70'
          }`}
        >
          {kicker}
        </span>
      ) : null}
      <h2
        className={`text-3xl font-extrabold tracking-tightest sm:text-4xl lg:text-5xl ${
          dark ? 'text-white' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
    </div>
  )
}
