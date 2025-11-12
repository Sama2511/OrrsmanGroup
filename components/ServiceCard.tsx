import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-card grid h-full max-w-[350px] grid-rows-[1fr_1fr_40px] overflow-hidden rounded-[3px] p-8 text-center">
      <CardHeader className="flex flex-col items-center text-center">
        <h2 className="mt-4 px-5 text-2xl font-bold">{title}</h2>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="m-auto">
        <div className="text-[30px]"> {icon}</div>
      </CardFooter>
    </Card>
  );
}
