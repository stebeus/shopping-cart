import { ExternalLink } from '@/components/ui/ExternalLink.jsx';
import { Icon } from '@/components/ui/Icon.jsx';

import './index.css';

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
        <Icon id="github" title="GitHub" />
      </ExternalLink>
    </footer>
  );
}
