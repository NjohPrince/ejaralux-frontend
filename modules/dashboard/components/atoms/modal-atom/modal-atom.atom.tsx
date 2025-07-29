"use client";

import React from "react";

import classes from "./modal.module.css";

import CloseIcon from "@/shared/components/icons/close.icon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalAtom = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={`${classes.overlay} flex center w-full`}>
      <div className={`${classes.modal} flex col gap-24`}>
        <header
          className={`${classes.header} flex gap-16 a-center space-between`}
        >
          <h2>{title}</h2>
          <button
            onClick={onClose}
            className={`flex center`}
            aria-label="close modal"
            title="Close Modal"
            tabIndex={0}
            type="button"
          >
            <CloseIcon color="var(--white-color)" />
          </button>
        </header>
        <div className={`${classes.body} flex col gap-12 w-full`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalAtom;
