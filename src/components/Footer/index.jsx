import './index.css';

import { ExternalLink } from '@/components/__ui__/ExternalLink.jsx';
import { IconSprite } from '@/components/__ui__/IconSprite.jsx';

export function Footer() {
  return (
    <footer>
      <p className="copyright">
        © Stebeus 2026.{' '}
        <ExternalLink to="https://opensource.org/license/mit">
          MIT License
        </ExternalLink>
      </p>
      <ExternalLink to="https://github.com/stebeus">
        <IconSprite id="github" alt="GitHub profile" />
      </ExternalLink>
    </footer>
  );
}
