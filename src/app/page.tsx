import Image from 'next/image'
import styles from './page.module.css'
import PickerProps from '@/date-time-picker/ScrollCounter'
import DateTimePicker from '@/date-time-picker/DateTimePicker'
import App from '@/date-time-picker/App'

export default function Home() {
  return (
    <main>
      {/* <DateTimePicker epochMillisecInitial={999999999999} /> */}
      <App />
    </main>
  )
}
