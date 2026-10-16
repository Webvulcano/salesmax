import Button from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function OutsourceCta() {
  return (
    <Section bgImage="/figma/kiszervezheto-bg.jpg" className="py-16 lg:py-25">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Pedig mindez kiszervezhető lenne</h2>
          <p className="max-w-208 text-base tracking-body">
            Az elvesztett lehetőségeknek meg ára van. A kevesebb lezárt üzlet kieső bevételt jelent a cégnek. Az
            ügyfélszerzés drágább, a növekedés lassabb
          </p>
        </div>
        <Button />
      </div>
    </Section>
  );
}
