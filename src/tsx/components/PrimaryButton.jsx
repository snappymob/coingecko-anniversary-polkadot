import React from 'react';
import { cn } from '../utils/cn';

/**
 *
 * @param {Object} PrimaryButtonProps
 * @param {string} PrimaryButtonProps.label
 * @param {React.HTMLAttributes<HTMLButtonElement>?} PrimaryButtonProps.buttonPt
 * @param {React.HTMLAttributes<HTMLDivElement>?} PrimaryButtonProps.innerPt
 */
const PrimaryButton = ({ label, buttonPt, innerPt }) => {
  const { className: buttonClassName, ...buttonPtRest } = buttonPt ?? {};
  const { className: innerClassName, ...innerPtRest } = innerPt ?? {};

  return (
    <button {...buttonPtRest} className={cn(`btn-primary`, buttonClassName ?? '')}>
      <div {...innerPtRest} className={cn(`btn-primary-text`, innerClassName ?? '')}>
        {label}
      </div>
    </button>
  );
};

export default PrimaryButton;
