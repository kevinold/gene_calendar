defmodule GeneCalendar.PageController do
  use GeneCalendar.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def calendar(conn, _params) do
    days = ["Monday", "Tuesday"]
    render conn, days: days
  end

end
