import { Table } from "@/shadcn/components/table";
import { CardView } from "@src/shadcn/components/table/card-view";
import { Badge } from "@src/shadcn/elements";
import NextImage from "next/image";

export function groupColumn() {
  return (
    <Table.Column
      header="Permission"
      id="groups"
      accessorKey="groups"
      enableSorting
      enableHiding
      cell={(props) => {
        const groups = props.getValue() as unknown as string[];
        return groups.map((value: string, index) => {
          return <Badge key={`badge-${index}`}>{value}</Badge>;
        });
      }}
    />
  );
}

export function GroupRow() {
  return (
    <CardView.Row
      header="Permission"
      id="groups"
      accessorKey="groups"
      cell={(props) => {
        const groups = props.getValue() as unknown as string[];
        return groups.map((value: string, index) => {
          return <Badge key={`badge-${index}`}>{value}</Badge>;
        });
      }}
    />
  );
}

export function Image() {
  return (
    <CardView.Row
      header="Permission"
      id="groups"
      accessorKey="groups"
      cell={(props) => {
        const groups = props.getValue() as unknown as string[];
        return groups.map((value: string, index) => {
          return <Badge key={`badge-${index}`}>{value}</Badge>;
        });
      }}
    />
  );
}

export function ImageColumn() {
  return (
    <CardView.Row
      header="Image"
      id="image"
      accessorKey="image"
      cell={(props) => {
        return (
          <div className="my-2">
            <NextImage
              src="https://fastly.picsum.photos/id/5/200/300.jpg?hmac=1TWjKFT7_MRP0ApEyDUA3eCP0HXaKTWJfHgVjwGNoZU"
              alt="image"
              width={100}
              height={120}
              className="rounded-lg shadow-sm"
            />
          </div>
        );
      }}
    />
  );
}
