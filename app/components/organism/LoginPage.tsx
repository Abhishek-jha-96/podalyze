import React from 'react'
import { LoginForm } from '../molecule/LoginForm'

export default function LoginPage() {
  return (
    <div className="bg-[url(/bg-2.png)] bg-cover bg-center min-h-screen flex w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
