defmodule GeneCalendar.PageController do
  use GeneCalendar.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
