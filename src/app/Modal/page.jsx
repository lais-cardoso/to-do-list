'use client'
 
import { useRouter } from 'next/navigation'
 
export function Modal({ children }) {
  const router = useRouter()
 
  return (
    <>
      <button
        type="button"
        onClick={() => {
          router.back()
        }}
      >
        Close modal
      </button>
      <div>{children}</div>
    </>
  )
}