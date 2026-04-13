import { ExternalLink } from '@/components/ui/ExternalLink.jsx';
import { SvgIcon } from '@/components/ui/SvgIcon.jsx';

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
        <SvgIcon id="github" alt="GitHub" />
      </ExternalLink>
    </footer>
  );
}
