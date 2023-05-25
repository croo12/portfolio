import Card from '@/components/card';
import BasicPageLayout from '@/components/common/basic'
import Line from '@/components/line';
import { HomeDescribe } from '@/utils/static_data';

const Home = () => {
  return (
    <>
        <Card title='안녕하세요.' content={HomeDescribe.map(el => <Line content={el} />)}  />
        <br/>
    </>
  )
}

export default Home;