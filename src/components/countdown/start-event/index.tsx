interface StartEventProps {
  title: string;
  description: string;
}

export function StartEvent({ title, description }: StartEventProps) {
  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </>
  );
}