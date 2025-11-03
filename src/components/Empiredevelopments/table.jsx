import Image from "next/image";

export default function TwoRowTable() {
  return (
    <section className="tw-w-full tw-text-white tw-rounded-2xl tw-my-20  tw-overflow-hidden">
      <div className="tw-h-full">
        <table className="tw-w-[90%] tw-mx-auto tw-bg-gradient-to-r tw-from-[#0f0f1a] tw-to-[#1a0f2b] tw-border tw-border-zinc-800 tw-rounded-2xl tw-text-left tw-text-gray-300 tw-overflow-hidden tw-backdrop-blur-sm">
          <tbody>
            {/* First Row */}
            <tr className="tw-border-b tw-border-zinc-800 tw-flex tw-flex-col md:tw-table-row">
              {/* Left Column */}
              <td className="tw-align-top md:tw-w-[60%] tw-p-6 tw-border-b md:tw-border-b-0 tw-border-zinc-800">
                <div className="tw-flex tw-flex-col tw-gap-4 tw-justify-center tw-items-start">
                  <p className="tw-text-white tw-leading-relaxed">
                    <span className="tw-text-white tw-font-semibold">
                      Empire Developments
                    </span>{" "}
                    is a premier real estate developer known for creating iconic, luxury residential and commercial properties. 
                    With a reputation for excellence and innovation, they sought a digital partner to build a website that reflected their premium brand and could effectively market high-value projects to an elite audience.
                  </p>
               
                </div>
              </td>

              {/* Right Column */}
              <td className="tw-align-top tw-p-6 tw-border-t md:tw-border-t-0 md:tw-border-l tw-border-zinc-800  tw-text-black">
                <div className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-gap-6">
                  {/* Column 1 */}
                  <div className="tw-flex tw-justify-between  md:tw-flex-col tw-gap-3">
                    <div>
                      <p className="tw-font-semibold tw-text-white">Industry</p>
                      <p className="tw-text-white">Real Estate</p>
                    </div>
                    <div>
                      <p className="tw-font-semibold tw-text-white">Launched</p>
                      <p className="tw-text-white">2025</p>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="tw-flex tw-justify-between md:tw-flex-col tw-gap-3">
                    <div>
                      <p className="tw-font-semibold tw-text-white">Technologies</p>
                      <p className="tw-text-white">Website Development</p>
                    </div>
                    <div>
                      <p className="tw-font-semibold tw-text-white">Country</p>
                      <p className="tw-text-white">UAE</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            {/* Second Row */}
            <tr>
              <td colSpan={2} className="tw-border-t tw-border-zinc-800 tw-p-0">
                <div className="tw-overflow-hidden tw-w-full">
                  {/* <Image
                    src="/assets/img/casestudies/Empire copy.png"
                    alt="Empire Developments website project preview"
                    width={1200}
                    height={800}
                    className="tw-object-cover tw-w-full tw-h-auto hover:tw-scale-[1.02] tw-transition-transform tw-duration-500"
                  /> */}
                 <video
  src="/assets/empire.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="tw-w-full tw-h-auto rounded-xl shadow-lg"/>     </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
