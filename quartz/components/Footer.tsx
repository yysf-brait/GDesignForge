import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
// import { version } from "../../package.json"
// import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const startYear = 2025
    const year = new Date().getFullYear()
    const yearText = `${startYear}–${year}`
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          © {yearText} GDesignForge · 本站内容默认采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 许可协议
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
