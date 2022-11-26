public interface Entity
{
	public int getValue();// unique
}

public interface EntityCollection
{
	public void add(Entity entity);
	public Entity removeMaxValue();
}