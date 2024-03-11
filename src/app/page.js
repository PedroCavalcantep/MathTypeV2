import { ComponentExterno } from "./ComponentExterno";

export default function MyApp() {
  return (
    <div>
      <h1 class="text-8xl antialiased text-center">olá, mundo, a culpa é de caua</h1>
      <ComponentLocal />
      <ComponentExterno />
    </div>
  );
}

function ComponentLocal() {
  return <p class="text-xl text-center">eu sou um component local</p>;
}
