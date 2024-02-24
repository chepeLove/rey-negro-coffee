import { useEffect, useState } from 'react'

import { menuItems } from '@/constants'
import { clsx } from 'clsx'

import styles from './Menu.module.scss'
export const Menu = () => {
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const changeLinkHandler = (event: Event) => {
      const targetWindow = event.currentTarget as Window

      setActiveLink(targetWindow.location.hash)
    }

    window.addEventListener('popstate', changeLinkHandler)

    return () => {
      window.removeEventListener('popstate', changeLinkHandler)
    }
  }, [activeLink])

  return (
    <nav>
      <ul className={styles.menu}>
        {menuItems.map(item => (
          <li className={clsx(styles['menu-item'])} key={item.name}>
            <a
              className={clsx(
                styles['menu-link'],
                activeLink === item.link && styles['menu-linkActive']
              )}
              href={item.link}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
