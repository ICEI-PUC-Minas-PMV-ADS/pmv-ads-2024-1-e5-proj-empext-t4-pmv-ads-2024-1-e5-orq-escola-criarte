using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InformativoOEC.Infra.Migrations
{
    /// <inheritdoc />
    public partial class AddRelationshipEventToEventPerson : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_EventPersons_EventId",
                table: "EventPersons",
                column: "EventId");

            migrationBuilder.AddForeignKey(
                name: "FK_EventPersons_Events_EventId",
                table: "EventPersons",
                column: "EventId",
                principalTable: "Events",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EventPersons_Events_EventId",
                table: "EventPersons");

            migrationBuilder.DropIndex(
                name: "IX_EventPersons_EventId",
                table: "EventPersons");
        }
    }
}
