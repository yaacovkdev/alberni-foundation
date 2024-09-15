import GrantsApply from '@/components/grants/grants_apply/GrantsApply'
import GrantsBenefits from '@/components/grants/grants_benefits/GrantsBenefits'
import GrantsHeader from '@/components/grants/grants_header/GrantsHeader'
import GrantsRecipients from '@/components/grants/grants_recipients/GrantsRecipients'
import GrantsStatement from '@/components/grants/grants_statement/GrantsStatement'

export default function Grants() {
  return (
    <article className="grants">
      <GrantsHeader />
      <GrantsStatement />
      <GrantsBenefits />
      <GrantsRecipients />
      <GrantsApply />
    </article>
  )
}
