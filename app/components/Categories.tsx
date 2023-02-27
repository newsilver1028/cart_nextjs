import Item from './Item';

interface Props {
  items?: ItemsByCategories;
}

export default function Categories({ items }: Props) {
  if (!items) return null;
  const categoryNames = Object.keys(items);

  return (
    <section>
      {categoryNames.map((name) => {
        return (
          <div key={name}>
            <h2>{name}</h2>
            {items[name].map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        );
      })}
    </section>
  );
}
