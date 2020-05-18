import user from "./user.vue";
import "../../default.pcss";

function bg() {
  return {
    data: () => ({
      styles: {
        padding: "20px",
        background: "#ccc",
      },
    }),
    template: '<div :style="styles"><story/></div>',
  };
}

export default {
  title: "User",
  decorators: [bg],
};

export const Default = () => ({
  components: {user},
  template: `
    <user
      username="Игорь Немгиров" 
      userpic="https://picsum.photos/300/300"
    />
  `,
});

Default.story = {
  name: "По умолчанию",
};