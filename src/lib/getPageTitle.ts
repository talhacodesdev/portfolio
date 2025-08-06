// utils/getPageTitle.ts

export function getPageTitle(pathname: string): string {
  switch (pathname) {
    case '/about':
      return 'About Me';
    case '/skills':
      return 'Skills';
    case '/projects':
      return 'Projects';
    case '/contact':
      return 'Contact Me';
    default:
      return 'Page';
  }
}
