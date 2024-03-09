import { ComponentExterno } from "./ComponentExterno";

function ComponentLocal() {
  return <p class="text-xl text-center">eu sou um component local</p>;
}

export default function MyApp() {
  return (
    <div class>
      <h1 class="text-8xl antialiased text-center">olá, mundo</h1>
      <ComponentLocal />
      <ComponentExterno />
    </div>
  );
}
