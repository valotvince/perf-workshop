"use client"

import { Card } from "@/app/exercise-1/components/card.component";
import { SharedStoreProvider } from "@/utils/state";

type Item = {id: string; title: string; description: string};

const items: Item[] = Array.from({length: 10}).map((_, index) => ({
  id: `item-${index}`,
  title: `Item ${index}`,
  description: 'Lorem Ipsum',
}))

export default function FirstPost() {
    return (
      <SharedStoreProvider>
        <div>
          <h1>Exercise 1</h1>
          <div className="grid gap-4 grid-cols-3 grid-rows-3">
            {items.map((props) => <Card key={props.id} {...props} />)}
          </div>
        </div>
      </SharedStoreProvider>
    );
  }
