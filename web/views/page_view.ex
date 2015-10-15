defmodule GeneCalendar.PageView do
  use GeneCalendar.Web, :view

  def render("calendar.json", %{days: days}) do
    days
  end
end
