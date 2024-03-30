import React from 'react';
import { cn } from '../utils/cn';

/**
 *
 * @param {Object} SecondaryButtonProps
 * @param {string} SecondaryButtonProps.label
 * @param {React.HTMLAttributes<HTMLButtonElement>?} SecondaryButtonProps.buttonPt
 * @param {React.HTMLAttributes<HTMLDivElement>?} SecondaryButtonProps.innerPt
 */
const SecondaryButton = ({ label, buttonPt, innerPt }) => {
  const { className: buttonClassName, ...buttonPtRest } = buttonPt ?? {};
  const { className: innerClassName, ...innerPtRest } = innerPt ?? {};

  return (
    <button {...buttonPtRest} className={cn(`btn-secondary`, buttonClassName ?? '')}>
      <div {...innerPtRest} className={cn(`btn-secondary-text`, innerClassName ?? '')}>
        {label}
      </div>
    </button>
  );
};

export default SecondaryButton;
