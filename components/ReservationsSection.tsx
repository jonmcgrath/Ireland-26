import { Fragment } from 'react'
import { airReservation, carReservation, hotelReservation } from '@/lib/reservations'

const statusStyles: Record<string, string> = {
  confirmed: 'bg-green-100 text-green-800',
  modified: 'bg-amber-100 text-amber-700',
}

export default function ReservationsSection() {
  return (
    <div className="space-y-3">
      {/* Air */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 pt-4 flex items-center gap-3 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-100 text-teal-800">
            ✈ Air
          </span>
          <span className="text-xs text-gray-500">{airReservation.summary}</span>
        </div>
        <div className="px-5 pb-4 pt-3 overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[480px]">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-gray-400">
                <th className="pb-2 pr-4 font-medium">Passenger</th>
                <th className="pb-2 pr-4 font-medium">Flight &amp; Seat</th>
                <th className="pb-2 font-medium">Confirmation</th>
              </tr>
            </thead>
            <tbody>
              {airReservation.legs.map((leg, li) => (
                <Fragment key={li}>
                  <tr>
                    <td colSpan={3} className="pt-3 pb-1 text-xs uppercase tracking-wide text-gray-400">
                      {leg.label}
                    </td>
                  </tr>
                  {leg.passengers.map((p, pi) => (
                    <tr key={pi} className="border-b border-gray-50 last:border-0">
                      <td className="py-2 pr-4 font-medium text-gray-900 whitespace-nowrap">{p.name}</td>
                      <td className="py-2 pr-4 text-gray-600">
                        <a href={airReservation.manageLink} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline font-medium">
                          {p.flightSeat}
                        </a>
                      </td>
                      <td className="py-2 font-mono text-xs bg-stone-50 rounded px-2 inline-block">{p.conf}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Car */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 pt-4 flex items-center gap-3 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
            ▪ Car
          </span>
          <span className="text-xs text-gray-500">{carReservation.summary}</span>
        </div>
        <div className="px-5 pb-4 pt-3 overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[480px]">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-gray-400">
                <th className="pb-2 pr-4 font-medium">Driver</th>
                <th className="pb-2 pr-4 font-medium">Vehicle &amp; Booking</th>
                <th className="pb-2 font-medium">Reference</th>
              </tr>
            </thead>
            <tbody>
              {carReservation.cars.map((c, ci) => (
                <tr key={ci} className="border-b border-gray-50 last:border-0">
                  <td className="py-2 pr-4 font-medium text-gray-900 whitespace-nowrap">{c.driver}</td>
                  <td className="py-2 pr-4 text-gray-600">
                    <a href={carReservation.manageLink} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline font-medium">
                      {c.vehicle}
                    </a>
                    <div className="text-xs text-gray-400 mt-0.5">{c.note}</div>
                  </td>
                  <td className="py-2 font-mono text-xs bg-stone-50 rounded px-2 inline-block align-top">{c.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hotel */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 pt-4 flex items-center gap-3 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-violet-100 text-violet-800">
            ■ Hotel
          </span>
          <span className="text-xs text-gray-500">{hotelReservation.summary}</span>
        </div>
        <div className="px-5 pb-2 pt-3 overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[480px]">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-gray-400">
                <th className="pb-2 pr-4 font-medium">Hotel</th>
                <th className="pb-2 pr-4 font-medium">Details</th>
                <th className="pb-2 font-medium">Confirmation(s)</th>
              </tr>
            </thead>
            <tbody>
              {hotelReservation.hotels.map((h, hi) => (
                <tr key={hi} className="border-b border-gray-50 last:border-0 align-top">
                  <td className="py-2 pr-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{h.name}</div>
                    <div className="text-xs text-gray-400">{h.loc}</div>
                    <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusStyles[h.statusType]}`}>
                      {h.status}
                    </span>
                  </td>
                  <td className="py-2 pr-4 text-gray-600">
                    <a href={h.link} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline font-medium">
                      {h.name}
                    </a>
                    <div className="text-xs text-gray-400 mt-0.5">{h.note}</div>
                  </td>
                  <td className="py-2">
                    <div className="flex flex-col gap-1">
                      {h.refs.map((ref, ri) => (
                        <span key={ri} className="font-mono text-xs bg-stone-50 rounded px-2 py-0.5 inline-block w-fit">{ref}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-xs text-gray-400 py-3">{hotelReservation.footer}</div>
        </div>
      </div>
    </div>
  )
}
