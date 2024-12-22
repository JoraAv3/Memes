import clsx from "clsx"

export const Section: React.FC<{className?: string, children: React.ReactNode}> = ({className, children}) => {
  return (
    <section className={clsx(className)}>{children}</section>
  )
}