import { title } from "@/src/components/primitives";
import {Counter} from "@/src/components/counter";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Docs</h1>
        <Counter/>
    </div>
  );
}
