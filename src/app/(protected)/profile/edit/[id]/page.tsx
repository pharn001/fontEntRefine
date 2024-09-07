"use client"
import React from 'react'
import { ProfileForm } from '../../container/from'

export default function profile({ params }: { params: { id: number } }): JSX.Element {
  return (
    <div>
    <ProfileForm id={params.id} action="edit"/>
    </div>
  )
}
