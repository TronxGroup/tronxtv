import Image from "next/image";
import Link from "next/link";

type ProgramCardProps = {
  title: string;
  desc: string;
  image: string;
  href: string;
  badge?: string;
};

export default function ProgramCard({ title, desc, image, href, badge }: ProgramCardProps) {
  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-video">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          {badge && <span className="badge">{badge}</span>}
        </div>
        <h3 className="h3">{title}</h3>
        <p className="p mt-2">{desc}</p>
        <Link href={href} className="btn-outline mt-5 inline-block">Ver detalles</Link>
      </div>
    </div>
  );
}
