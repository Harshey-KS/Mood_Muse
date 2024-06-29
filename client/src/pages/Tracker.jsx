import MoodTracker from '../components/MoodTracker';

export default function Tracker() {
  return (
    <div className='min-h-screen max-w-4xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Mood Tracker</h1>
      <p className='text-md text-gray-500'>Monitor Your Mind: Track, Analyze, and Enhance Your Emotional Well-being</p>
      <MoodTracker />
    </div>
  )
}