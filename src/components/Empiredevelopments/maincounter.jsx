import Counter from './counter'

const stats = [
  { label: 'Speed Optimization', value: 95 },
  { label: 'User Engagement', value: 99 },
  { label: 'Conversion Rate', value: 8.4 },
  { label: 'Site Security', value: 100 }
]

const MainCounter = () => {
  return (
    <div className='tw-w-full tw-flex  tw-items-center tw-justify-center tw-p-6'>
    <div className="max-w-5xl mx-auto tw-p-4">
      <div className="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-gap-14">
        {stats.map((stat, index) => (
          <div key={index} className="tw-flex tw-flex-col tw-items-center">
            <h2 className="tw-text-lg tw-font-semibold">{stat.label}</h2>
            <Counter number={stat.value} />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default MainCounter