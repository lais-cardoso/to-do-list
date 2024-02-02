"use client";
import "@/styles/modal.css"

export default function ModalComponent({ children }) {
  return (
  <div className="modal">{children}</div>
  );
}