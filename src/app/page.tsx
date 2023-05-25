import BasicPageLayout from '@/components/common/basic'
import Sentence from '@/components/sentence'

export default function Home() {
  return (
    <BasicPageLayout>
        <Sentence title={`Get started by editing`} code={`src/app/page.tsx`} />
    </BasicPageLayout>
  )
}
