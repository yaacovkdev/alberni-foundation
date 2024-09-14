import GrantsHeader from '@/components/grants/grants_header/GrantsHeader'
import GrantsStatement from '@/components/grants/grants_statement/GrantsStatement'
import React from 'react'

export default function Grants() {
  return (
    <article className="grants">
      <GrantsHeader />
      <GrantsStatement />
    </article>
  )
}
